// Add your code here

namespace tileworld {

    export const editorRow = 2;
    
    export class RuleDisplay extends RuleVisualsBase {
        protected all: AllExport;

        constructor(p: Project, protected rule: RuleView) {
            super(p);
            this.all = new AllExport(p);
        }

        protected getDir() {
            return this.rule.getDirFromRule();
        }

        protected getType() {
            return this.rule.getRuleType();
        }

        protected getKind() {
            let kinds = this.rule.getSpriteKinds();
            if (kinds.length > 0)
                return kinds[0];
            return -1;
        }

        protected centerImage() {
            return ok;
        }

        protected getDirectionImage() {
            let dir = this.rule.getDirFromRule();
            // TODO: need an image for Resting, Moving and AnyDir
            if (dir == Resting)
                return null;
            return this.getType() == RuleType.ButtonPress ? buttonImages[dir] : moveImages[dir];
        }

        protected collideCol: number;
        protected collideRow: number;

        protected showCollision(col: number, row: number, dir: MoveDirection, arrowImg: Image, rt: RuleType) {
            super.showCollision(col, row, dir, arrowImg, rt);
            this.collideCol = col;
            this.collideRow = row - editorRow;
        }

        protected update() {
            this.collideCol = this.collideRow = -1;
            screen.fill(0);
            screen.print("When", 0, (editorRow << 4) + 8);
            if (this.p.debug)
                screen.print(this.rule.getRuleId().toString(), 30, 0);
            screen.print("Do", 70, (editorRow << 4) + 8);
            // sets collideCol and collideRow
            this.showRuleType(this.rule.getRuleType(), this.rule.getDirFromRule(), 2, 2 + editorRow);
            this.makeContext();
            this.showCommands();
        }

        private makeContext() {
            for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 4; j++) {
                    let dist = Math.abs(2 - j) + Math.abs(2 - i);
                    if (dist <= 2 && this.active(i, j)) {
                        this.drawImage(i, j + editorRow, emptyTile);
                        this.showAttributes(i, j);
                    }
                }
            }
        }

        protected active(col: number, row: number) {
            if (this.collideCol != -1) {
                return col == 2 && row == 2 || col == this.collideCol && row == this.collideRow;
            }
            return true;
        }

        // map from row 0-4 to (col,row) in diamond
        protected rowToColCoord(lr: number) { return lr % 2 == 0 ? 2 : lr; }
        protected rowToRowCoord(lr: number) { return lr == 0 ? 1 : (lr == 4 ? 3 : 2); }
        protected commandLengths: number[];

        private showCommands() {
            this.commandLengths = [];
            for (let lr = 0; lr < 5; lr++) {
                let col = this.rowToColCoord(lr);
                let row = this.rowToRowCoord(lr);
                if (this.active(col, row)) {
                    let len = this.showCommandsAt(lr, col, row);
                    this.commandLengths.push(len);
                } else {
                    this.commandLengths.push(-1);
                }
            }
        }

        protected instToImage(inst: number, arg: number): Image {
            if (inst == 0xff || arg == 0xff)
                return emptyTile;
            switch (inst) {
                case CommandType.Move: return moveImages[arg];
                case CommandType.Paint: return this.p.backgroundImages()[arg];
                case CommandType.Sprite: return spriteImages[arg];
                case CommandType.Game: return gameImages[arg];
            }
            return emptyTile;
        }

        protected tokens: number[];
        protected showCommandsAt(crow: number, wcol: number, wrow: number, draw: boolean = true) {
            if (draw) {
                let index = this.findWitnessColRow(wcol, wrow);
                let img1 = this.collideCol == wcol && this.collideRow == wrow ? collisionSprite : genericSprite;
                let img2 = index == -1 ? img1 : this.p.getSpriteImage(index);
                this.drawImage(5, crow + editorRow, img2);
                if (img1 == collisionSprite)
                    this.drawImage(5, crow + editorRow, img1);
            }
            // show the existing commands
            let whendo = this.rule.getWhenDo(wcol, wrow);
            let col = 6;
            let tokens = this.getTokens(wcol, wrow);
            if (!draw) { this.tokens = tokens; }
            let cid = 0
            for (; whendo != -1 && cid < this.rule.getCmdsLen(whendo); cid++ , col++) {
                let inst = this.rule.getCmdInst(whendo, cid);
                let arg = this.rule.getCmdArg(whendo, cid);
                this.showCommand(col, crow, whendo, cid, tokens, draw);
            }
            if (whendo == -1 || cid < MaxCommands && tokens.length > 0) {
                this.showCommand(col, crow, whendo, cid, tokens, draw);
                return cid + 1;
            }
            return cid;
        }

        private showCommand(col: number, row: number,
            whendo: number, cid: number, tokens: number[],
            draw: boolean) {
            if (whendo == -1) {
                if (draw) this.drawImage(col, row + editorRow, emptyTile);
            } else {
                let inst = this.rule.getCmdInst(whendo, cid);
                let arg = this.rule.getCmdArg(whendo, cid);
                if (draw) this.drawImage(col, row + editorRow, this.instToImage(inst, arg));
                tokens.removeElement(inst);
                col++;
            }
            return col;
        }

        private posSpritePosition(whendo: number, begin: number) {
            let index = this.attrIndex(whendo, AttrType.Include, begin);
            return (index == -1) ? this.attrIndex(whendo, AttrType.Include2, begin) : index;
        }

        private findWitnessWhenDo(whendo: number) {
            if (whendo == -1)
                return -1;
            return this.posSpritePosition(whendo, this.p.backCnt());
        }

        // what is ordering of sprites?
        // (0,0) always first
        private findWitnessColRow(col: number, row: number): number {
            if (col == 2 && row == 2) return this.getKind();
            return this.findWitnessWhenDo(this.rule.getWhenDo(col, row));
        }

        // what instructions are possible, given rule type and witness
        // this defines the menu to present at the top-level
        private getTokens(col: number, row: number) {
            let tokens: number[] = [];
            if (this.findWitnessColRow(col, row) != -1) {
                if ((col == 2 && row == 2) || this.getType() != RuleType.Collision)
                    tokens.push(CommandType.Move);
            }
            if (this.getType() != RuleType.Collision) {
                tokens.push(CommandType.Paint);
            }
            if (this.findWitnessColRow(col, row) != -1) {
                tokens.push(CommandType.Sprite);
            }
            tokens.push(CommandType.Game);
            return tokens;
        }

        protected showAttributes(col: number, row: number) {
            let whenDo = this.rule.getWhenDo(col, row);
            if (whenDo >= 0) {
                // if there is an include or single oneOf, show it.
                let indexInclude = this.attrIndex(whenDo, AttrType.Include);
                let indexOneOf = indexInclude == -1 ? this.attrIndex(whenDo, AttrType.Include2) : indexInclude;
                let index = indexOneOf == -1 ? this.attrIndex(whenDo, AttrType.Exclude) : indexOneOf;
                // and skip to the other (if it exists)
                if (index != -1) {
                    this.drawImage(col, row + editorRow, this.all.getImage(index));
                }
                let begin = 0;
                let end = this.p.allCnt() - 1;
                let project = this.projectAttrs(whenDo, begin, end);
                let done: AttrType[] = [];
                project.forEach(a => {
                    let i = attrValues.indexOf(a);
                    screen.drawTransparentImage(attrImages[i], (col << 4) + 8 + attrXoffsets[i], ((row + editorRow) << 4) + 8 + yoff + attrYoffsets[i]);
                });
            }
        }

        private projectAttrs(whendo: number, begin: number, end: number): number[] {
            if (this.rule.whendoTrue(whendo))
                return [];
            let res: number[] = [];
            for (let i = begin; i <= end; i++) {
                let a = this.all.getSetAttr(this.rule, whendo, i);
                if (a != AttrType.OK && res.indexOf(a) == -1) res.push(a);
            }
            if (res.length > 0) {
                if (res.length == 1 && res.indexOf(AttrType.Exclude) != -1)
                    return [AttrType.Exclude];
                else
                    return [];
            }
            return res;
        }

        protected attrIndex(whendo: number, a: AttrType, begin: number = 0) {
            for (let i = begin; i < this.p.allCnt(); i++) {
                if (this.all.getSetAttr(this.rule, whendo, i) == a)
                    return i;
            }
            return -1;
        }
    }
}