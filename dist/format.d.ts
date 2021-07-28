declare const format: {
    toThousand(val: number | string | void): string;
    toPercent(value: number | string | void, unit?: string): string;
};
export default format;
