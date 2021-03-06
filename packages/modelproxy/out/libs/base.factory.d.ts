export declare class BaseFactory<T> implements Storage {
    protected instances: {
        [id: string]: T;
    };
    length: number;
    add(name: string, instance: T, override?: boolean): void;
    setItem(key: string, value: string): void;
    private remove(name);
    removeItem(name: string): void;
    has(name: string): boolean;
    private get(name);
    getItem(name: string): any;
    forEach(fn: Function): void;
    clear(): void;
    key(index: number): string;
}
