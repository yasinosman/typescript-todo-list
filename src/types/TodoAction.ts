export default interface TodoAction {
    type: string;
    payload: {
        id: string | undefined;
        description: string | undefined;
    };
}
