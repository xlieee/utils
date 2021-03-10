export declare type callback = (curCount: number, initialCount: number, initialText?: string) => any;
declare const _default: (perSecondCallback: callback, opts: {
    initialCount: number;
    initialText?: string;
}, immediate?: Boolean) => void | ((cb: callback) => any);
export default _default;
