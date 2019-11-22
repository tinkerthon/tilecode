enum RuleType {
    Resting,
    Moving,
    Push
}

enum CommandType {
    None,
    Move,
    Paint,
}

type Guard = {
    x: number;
    y: number;
    none?: string[];
    some?: string[];
    has?: string[];
    exactly?: string[];
}

type Command = {
    kinds: string[];
    inst: CommandType;
    dir?: TileDir;
    kind?: string;
    highlight?: boolean;
}

type Rule = {
    event: RuleType;
    kinds: string[];
    dir?: TileDir;
    guards: Guard[];
    commands: Command[];
}

let bd = ["Boulder", "Diamond"]

let ruleA: Rule =  {
    event:  RuleType.Resting,
    kinds:  ["Player"],
    dir:    TileDir.None,
    guards: [],
    commands: [ { kinds: ["Player"], inst:CommandType.Paint, 
                    dir:TileDir.None, kind: "Space"} ] 
}

let ruleB: Rule = {
    event: RuleType.Push,
    kinds: ["Player"],
    dir: TileDir.Right,
    guards: [ { x:1, y:0, none:["Wall", "Boulder"] } ],
    commands: [{
        kinds: ["Player"], inst: CommandType.Move,
        dir: TileDir.Right
    }]
}

let ruleC: Rule = {
    event: RuleType.Push,
    kinds: ["Player"],
    dir: TileDir.Right,
    guards: [{ x: 1, y: 0, has: ["Boulder"] },
             { x: 2, y: 0, exactly: ["Space"] }
            ],
    commands: [
        { kinds:["Player"], inst: CommandType.Move, dir: TileDir.Right},
        { kinds:["Boulder"], inst: CommandType.Move, dir: TileDir.Right}
    ]
}

let ruleC_Left: Rule = {
    event: RuleType.Push,
    kinds: ["Player"],
    dir: TileDir.Left,
    guards: [{ x: -1, y: 0, has: ["Boulder"] },
    { x: -2, y: 0, exactly: ["Space"] }
    ],
    commands: [
        { kinds: ["Player"], inst: CommandType.Move, dir: TileDir.Left },
        { kinds: ["Boulder"], inst: CommandType.Move, dir: TileDir.Left }
    ]
}

let ruleG: Rule = {
    event: RuleType.Resting,
    kinds: bd,
    guards: [
        { x: 0, y: 1, exactly: ["Space"] },
    ],
    commands: [
        { kinds: bd, inst: CommandType.Move, dir: TileDir.Down }
    ]
}

let ruleH: Rule = {
    event: RuleType.Resting,
    kinds: bd,
    guards: [
        { x: -1, y: 0, exactly: ["Space"] },
        { x: -1, y: 1, exactly: ["Space"] },
        { x: 0, y: 1, some: bd },
    ],
    commands: [
        { kinds: bd, inst: CommandType.Move, dir: TileDir.Left, highlight: true},
        { kinds: bd, inst: CommandType.None }
    ]
}

let ruleI: Rule = {
    event: RuleType.Moving,
    dir: TileDir.Down,
    kinds: bd,
    guards: [
        { x: 0, y: 1, has: ["Space"], none: bd  }
    ],
    commands: [
        { kinds: bd, inst: CommandType.Move, dir: TileDir.Down }
    ]
}

let ruleAttr: Rule = {
    event: RuleType.Moving,
    dir: TileDir.Down,
    kinds: bd,
    guards: [ ],
    commands: []
}
