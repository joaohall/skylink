// interfaces.ts
export interface sizes {
    height: number;
    width: number;
}
export interface image extends sizes{
    alternativeText : string;
    source : string;
    about? : string;
    contentFill? : string;
}