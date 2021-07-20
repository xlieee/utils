declare const format: {
    toThousand(val: number | string | void): string | number;
    toPercent(value: number | string | void, unit?: string): string;
};
export default format;
