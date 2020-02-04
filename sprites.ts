namespace tileworld {

// all sprites go here

export const map = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . 2 2 2 1 1 1 2 2 2 . . . .
    . . . 2 2 1 1 1 1 1 2 2 . . . .
    . . . 2 2 1 1 1 1 1 2 2 . . . .
    . . . 2 2 2 1 1 1 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const play = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 7 7 . . . . . . . . . . .
    . . . 7 7 7 7 . . . . . . . . .
    . . . 7 7 7 7 7 7 . . . . . . .
    . . . 7 7 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 . . . . . . .
    . . . 7 7 7 7 . . . . . . . . .
    . . . 7 7 . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const debug = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . 1 2 2 1 . . . . . .
    . . . . . 1 1 2 2 1 1 . . . . .
    . . 2 . . 2 2 2 2 2 2 . . 2 . .
    . . 2 2 . e e e e e e . 2 2 . .
    . . . . e 2 2 2 2 2 2 e . . . .
    . . . . e 2 f 2 2 f 2 e . . . .
    . . 2 2 e 2 2 2 2 2 2 e 2 2 . .
    . . . . e 2 f 2 2 f 2 e . . . .
    . . . . e 2 2 2 2 2 2 e . . . .
    . . 2 2 e 2 f 2 2 f 2 e 2 2 . .
    . . 2 . . e 2 2 2 2 e . . 2 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const code = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 9 . . . . . .
    . . . . 1 . . . . 1 . 1 . . . .
    . . . 1 . . . . 9 1 . . 1 . . .
    . . 1 . . . . . 1 . . . . 1 . .
    . 1 . . . . . 9 1 . . . . . 1 .
    . . 1 . . . . 1 . . . . . 1 . .
    . . . 1 . . 9 1 . . . . 1 . . .
    . . . . 1 . 1 . . . . 1 . . . .
    . . . . . . 1 . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const paint = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 4 1 4 1 4 1 4 1 . . . .
    . . . . 4 1 4 1 4 1 4 1 . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 9 9 9 9 9 9 9 9 . . . .
    . . . . d e e e e e e e . . . .
    . . . . d e e e e e e e . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d f f e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const music = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 9 . . . . . .
    . . . . . . . . 9 9 9 . . . . .
    . . . . . . . . 9 . 9 9 . . . .
    . . . . . . . . 9 . . 9 . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . 9 9 9 9 9 . . . . . . .
    . . . 9 9 9 9 9 9 . . . . . . .
    . . . 9 9 9 9 9 9 . . . . . . .
    . . . . 9 9 9 9 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const emptyTile = img`
    b b b b b b b b b b b b b b b c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    c c c c c c c c c c c c c c c c
`;
export const cursorIn = img`
    . . . . . . . . . . . . . . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . 1 1 . . . . . . . . . . 1 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 1 . . . . . . . . . . 1 1 .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
`;
export const cursorOut = img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    1 1 . . . . . . . . . . . . 1 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 1 . . . . . . . . . . . . 1 1
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
`;
export const collisionRestingSprite = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const collisionMovingSprite = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . f 2 2 2 2 2 2 f 2 2 2 2
    . . . . f 2 2 2 2 2 2 f f f f f
    . . . . f 2 2 2 2 2 2 f 2 2 2 .
    . . . . f 2 2 2 2 2 2 f f f f .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const genericSprite = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . f b b b b f . . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . . f b b b b f . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const exclude = img`
    . f 2 2 2 2 f .
    f 2 2 f f 2 2 f
    2 2 2 2 f f 2 2
    2 f 2 2 2 f f 2
    2 f f 2 2 2 f 2
    2 2 f f 2 2 2 2
    f 2 2 f f 2 2 f
    . f 2 2 2 2 f .
`;
export const include = img`
    . . . . . . f 7
    . . . . . f 7 7
    f . . . . f 7 f
    7 f . . f 7 7 f
    7 7 f . f 7 f .
    f 7 7 f 7 7 f .
    . f 7 7 7 f . .
    . . f 7 f . . .
`;
export const oneof = img`
    . f f f f f f .
    f f 5 5 5 5 f f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f f 5 5 5 5 f f
    . f f f f f f .
`;
export const ok = img`
    . f 7 7 7 7 f .
    f 7 7 f f 7 7 f
    7 7 f f f f 7 7
    7 f f f f f f 7
    7 f f f f f f 7
    7 7 f f f f 7 7
    f 7 7 f f 7 7 f
    . f 7 7 7 7 f .
`;
export const allFour = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 9 . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 9 9 9 9 . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . 9 . . 9 9 9 . . 9 . . . .
    . . 9 9 9 9 9 9 9 9 9 9 9 . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . .
    . . 9 9 9 9 9 9 9 9 9 9 9 . . .
    . . . 9 . . 9 9 9 . . 9 . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 9 9 9 9 . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . . . 9 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const downArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . f f f 9 9 9 f f f . . . .
    . . . f 9 9 9 9 9 9 9 f . . . .
    . . . . f 9 9 9 9 9 f . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . . f 9 f . . . . . . .
    . . . . . . . f . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const downButton = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 6 6 6 6 . . . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 6 7 7 7 7 6 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . . 8 8 6 6 6 6 6 6 8 8 . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
`
export const upArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . f . . . . . . . .
    . . . . . . f 9 f . . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . f 9 9 9 9 9 f . . . . .
    . . . f 9 9 9 9 9 9 9 f . . . .
    . . . f f f 9 9 9 f f f . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const upButton = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 6 6 6 6 . . . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 6 7 7 7 7 6 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 6 6 6 6 6 7 7 6 6 6 6 6 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . . 8 8 6 6 6 6 6 6 8 8 . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
`
export const rightArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . f f . . . . .
    . . . . . . . . . f 9 f . . . .
    . . . . f f f f f f 9 9 f . . .
    . . . . f 9 9 9 9 9 9 9 9 f . .
    . . . . f 9 9 9 9 9 9 9 9 9 f .
    . . . . f 9 9 9 9 9 9 9 9 f . .
    . . . . f f f f f f 9 9 f . . .
    . . . . . . . . . f 9 f . . . .
    . . . . . . . . . f f . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const rightButton = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 6 6 6 6 . . . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 7 6 6 6 6 6 . .
    . . 6 6 6 6 6 6 7 7 6 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 6 6 6 7 7 6 6 6 6 . .
    . . 6 6 6 6 6 6 7 6 6 6 6 6 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . . 8 8 6 6 6 6 6 6 8 8 . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
`
export const leftArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f . . . . . . . . .
    . . . . f 9 f . . . . . . . . .
    . . . f 9 9 f f f f f f . . . .
    . . f 9 9 9 9 9 9 9 9 f . . . .
    . f 9 9 9 9 9 9 9 9 9 f . . . .
    . . f 9 9 9 9 9 9 9 9 f . . . .
    . . . f 9 9 f f f f f f . . . .
    . . . . f 9 f . . . . . . . . .
    . . . . . f f . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const leftButton = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 6 6 6 6 . . . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 7 6 6 6 6 6 6 . .
    . . 6 6 6 6 7 7 6 6 6 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 6 7 7 6 6 6 6 6 6 . .
    . . 6 6 6 6 6 7 6 6 6 6 6 6 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . . 8 8 6 6 6 6 6 6 8 8 . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
`
export const Abutton = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 6 6 6 6 . . . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 7 7 6 6 6 6 . . .
    . . 6 6 6 6 7 7 7 7 6 6 6 6 . .
    . . 6 6 6 7 7 6 6 7 7 6 6 6 . .
    . . 6 6 6 7 7 6 6 7 7 6 6 6 . .
    . . 6 6 6 7 7 7 7 7 7 6 6 6 . .
    . . 6 6 6 7 7 6 6 7 7 6 6 6 . .
    . . 6 6 6 7 7 6 6 7 7 6 6 6 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . 8 6 6 6 6 6 6 6 6 6 6 8 . .
    . . . 8 8 6 6 6 6 6 6 8 8 . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
`
/*
export const flipHoriz = img`
    . . . . . . . . . . . . . . . .
    . . . . . b b . . 9 9 . . . . .
    . . . . . b b . . 9 9 . . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . b b b b b . . 9 8 9 9 9 . .
    . . b b b b b . . 9 8 8 9 9 . .
    . . b b 8 8 8 8 8 8 8 8 8 9 . .
    . b b b b b b . . 9 8 8 9 9 9 .
    . b b b b b b . . 9 8 9 9 9 9 .
    . b b b b b b . . 9 9 9 9 9 9 .
    . . . . . . . . . . . . . . . .
`;
export const flipVert = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 9 9 9 .
    . . . . . . . . . 9 9 9 9 9 9 .
    . . . . . . 9 9 9 9 9 8 9 9 9 .
    . . . 9 9 9 9 9 9 9 8 8 8 9 9 .
    . 9 9 9 9 9 9 9 9 8 8 8 8 8 9 .
    . 9 9 9 9 9 9 9 9 9 9 8 9 9 9 .
    . . . . . . . . . . . 8 . . . .
    . . . . . . . . . . . 8 . . . .
    . b b b b b b b b b b 8 b b b .
    . b b b b b b b b b b 8 b b b .
    . . . b b b b b b b b 8 b b b .
    . . . . . . b b b b b b b b b .
    . . . . . . . . . b b b b b b .
    . . . . . . . . . . . . b b b .
    . . . . . . . . . . . . . . . .
`;
export const rotateLeft = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 8 . . . . . . . . .
    . . . . . 8 8 . . . . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . . 8 8 . . 8 8 . . . . .
    . . . . . . 8 . . . 8 8 . . . .
    . . . . . . . . . . . 8 8 . . .
    . 9 9 9 . . . . . . . . 8 . . .
    . 9 9 9 9 9 9 . . . . . 8 . . .
    . 9 9 9 9 9 9 9 9 9 . . . . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
*/
export const eat = img`
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f f . . . . .
    . . . . f 5 5 5 5 5 5 f . . . .
    . . . f 5 5 5 5 5 5 5 5 f . . .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 5 5 5 5 5 f f . . .
    . f 5 5 5 5 5 5 5 f f . . . . .
    . f 5 5 5 5 5 5 f . . . . . . .
    . f 5 5 5 5 5 5 f . . . . . . .
    . f 5 5 5 5 5 5 5 f f . . . . .
    . f 5 5 5 5 5 5 5 5 5 f f . . .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . . . f 5 5 5 5 5 5 5 5 f . . .
    . . . . f 5 5 5 5 5 5 f . . . .
    . . . . . f f f f f f . . . . .
    . . . . . . . . . . . . . . . .
`;
export const stopSign = img`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . 1 2 2 2 2 2 2 1 . . . .
    . . . 1 2 2 2 2 2 2 2 2 1 . . .
    . . 1 2 2 2 1 1 1 1 2 2 2 1 . .
    . 1 2 2 2 1 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 1 2 2 2 2 2 2 2 2 1 .
    . 1 2 2 2 2 1 1 1 1 2 2 2 2 1 .
    . 1 2 2 2 2 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 2 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 1 2 2 2 2 1 2 2 2 1 .
    . . 1 2 2 2 1 1 1 1 2 2 2 1 . .
    . . . 1 2 2 2 2 2 2 2 2 1 . . .
    . . . . 1 2 2 2 2 2 2 1 . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . . . . . . . . . . . . .
`;
export const uTurn = img`
    . . . f 5 5 5 5 5 5 5 5 f . . .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 f f f f 5 5 5 5 f .
    f 5 5 5 5 f f f f f f 5 5 5 5 f
    5 5 5 5 f f f 5 5 f f f 5 5 5 5
    5 5 5 f f f 5 5 5 5 f f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 f f f f f f 5 5 5 5 f f 5 5 5
    5 5 f f f f 5 5 5 5 5 f f 5 5 5
    5 5 f f f f 5 5 5 5 5 f f 5 5 5
    f 5 5 f f 5 5 5 5 5 5 f f 5 5 f
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . . . f 5 5 5 5 5 5 5 5 f . . .
`;
export const addRule = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const garbageCan = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . b b b b b . . . . .
    . . . . . b b . . . b b . . . .
    . . b b b b b b b b b b b b b .
    . . . b b b b b b b b b b b . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . . b b b b b b b . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const diskIcon = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . 1 6 1 6 6 6 6 6 6 1 6 1 . .
    . . 1 6 1 6 6 6 6 6 6 1 6 1 . .
    . . 1 6 1 6 6 6 6 6 6 1 6 1 . .
    . . 1 6 1 1 1 1 1 1 1 1 6 1 . .
    . . 1 6 6 6 6 6 6 6 6 6 6 1 . .
    . . 1 6 6 6 6 6 6 6 6 6 6 1 . .
    . . 1 6 6 1 1 1 1 1 1 6 6 1 . .
    . . 1 6 6 1 6 6 6 6 1 6 6 1 . .
    . . 1 6 6 1 6 6 6 6 1 6 6 1 . .
    . . 1 1 6 1 6 6 6 6 1 6 6 1 . .
    . . . 1 1 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const settingsIcon = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 1 1 . . . . . . .
    . . . . 1 9 . 1 1 . 9 1 . . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 9 1 1 1 9 9 1 1 1 9 . . .
    . . . . 1 1 9 . . 9 1 1 . . . .
    . . 1 1 1 9 . . . . 9 1 1 1 . .
    . . 1 1 1 9 . . . . 9 1 1 1 . .
    . . . . 1 1 9 . . 9 1 1 . . . .
    . . . 9 1 1 1 9 9 1 1 1 9 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . 1 9 . 1 1 . 9 1 . . . .
    . . . . . . . 1 1 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const reset = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . 1 9 9 9 9 9 9 1 . . . .
    . . . . 1 9 . . . . . 9 1 . . .
    . . . . 1 9 . . . . . 9 1 . . .
    . 1 9 9 1 9 9 1 . . . 9 1 . . .
    . . 1 1 1 1 1 . . . . 9 1 . . .
    . . . 1 1 1 . . . . . 9 1 . . .
    . . . . 1 . . . . . . 9 1 . . .
    . . . . . . . . . . . 9 1 . . .
    . . . . . 9 9 9 9 9 9 1 . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const gameIcon = img`
    . . . . . . . . . . . . . . . .
    . . f 7 7 7 7 f . . . . . . . .
    . f 7 7 7 7 7 7 f . . . . . . .
    . 7 7 7 f f f f f . . . . . . .
    . 7 7 f f f f f f . . . . . . .
    . 7 7 f f 7 7 7 f . . . . . . .
    . 7 7 f f f f 7 7 . . . . . . .
    . 7 7 7 f f f 7 7 . . . . . . .
    . f 7 7 7 7 7 7 f 5 5 5 5 5 . .
    . . f 7 7 7 7 f . 5 5 5 5 . 5 .
    . . . . . . . 5 . 5 5 5 5 . 5 .
    . . . . . . . 5 . 5 5 5 5 . 5 .
    . . . . . . . . 5 5 5 5 5 5 . .
    . . . . . . . . . 5 5 5 5 . . .
    . . . . . . . . 5 5 5 5 5 5 . .
    . . . . . . . . . . . . . . . .
`;
export const trophyUp = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 4 5 5 5 5 5 5 5 5 5 5 1 . .
    . . . 4 5 5 5 5 5 5 5 5 1 . . .
    . 5 5 5 4 5 5 5 5 5 5 5 5 5 5 .
    . 5 . . 4 5 6 5 5 6 5 1 . . 5 .
    . 5 . . 4 5 5 5 5 5 5 1 . . 5 .
    . . 5 . 4 5 5 5 5 5 5 1 . 5 . .
    . . . 5 4 5 6 5 5 6 5 1 5 . . .
    . . . . 4 5 5 6 6 5 5 1 . . . .
    . . . . . 4 5 5 5 5 1 . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . 4 5 5 5 5 1 . . . . .
    . . . . 4 5 5 5 5 5 5 1 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const trophyDown = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 1 5 5 5 5 5 5 4 . . . .
    . . . . . 1 5 5 5 5 4 . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . 1 5 5 5 5 4 . . . . .
    . . . . 1 5 5 5 5 5 5 4 . . . .
    . . . 5 1 5 2 5 5 2 5 4 5 . . .
    . . 5 . 1 5 5 5 5 5 5 4 . 5 . .
    . 5 . . 1 5 5 5 5 5 5 4 . . 5 .
    . 5 . . 1 5 5 2 2 5 5 4 . . 5 .
    . 5 5 5 5 5 2 5 5 2 5 4 5 5 5 .
    . . . 1 5 5 5 5 5 5 5 5 4 . . .
    . . 1 5 5 5 5 5 5 5 5 5 5 4 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const equalZero = img`
    . . . . . . . . . f f f f f . .
    . . . . . . . . f 1 1 1 1 1 f .
    . f f f f f f f 1 1 f f f 1 1 f
    . f 1 1 1 1 f f 1 f f f 1 f 1 f
    . f f f f f f f 1 f f 1 f f 1 f
    . f 1 1 1 1 f f 1 f 1 f f f 1 f
    . f f f f f f f 1 1 f f f f 1 f
    . . . . . . . . f 1 1 1 1 1 f .
    . . . . . . . . . f f f f f . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;

export const moveImages = [leftArrow, rightArrow, upArrow, downArrow, stopSign, uTurn];
export const moveText = ["left", "right", "up", "down", "stop", "u-turn"];
export const buttonImages = [leftButton, rightButton, upButton, downButton];
export const attrImages = [include, exclude, ok, oneof];
export const attrValues = [AttrType.Include, AttrType.Exclude, AttrType.OK, AttrType.OneOf];
export const attrXoffsets = [-8, 0, 0, -8];
export const attrYoffsets = [0, 0, -8, 0];
export const commandImages = [map, paint, code, play, settingsIcon];
export const gameImages = [ trophyUp, trophyDown ];
export const gameText = [ "win", "lose"];
export const categoryImages = [allFour, paint, genericSprite, equalZero, gameIcon ];
export const categoryText = ["move sprite", "paint tile", "sprite", "test", "game"];
export const spriteImages = [eat];
export const spriteText = ["remove"];


}