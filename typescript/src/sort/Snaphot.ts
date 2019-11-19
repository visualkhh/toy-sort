export interface Snaphot<T, S> {
    pushSnapshot(input: Array<T>);
    getSnapshot(): Array<Array<S>>;

}
