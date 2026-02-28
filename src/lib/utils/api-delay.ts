export const apiDelay = (ms: number = 300) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const withDelay = async <T>(
    fn: () => Promise<T>,
    ms: number = 300
): Promise<T> => {
    await apiDelay(ms);
    return fn();
};