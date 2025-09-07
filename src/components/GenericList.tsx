import Loading from "./Loading";

export default function GenericList<T>(props: GenericListProps<T>) {

    if (!props.list) {
        return props.loadingUI ? props.loadingUI : <Loading />;
    } else if (props.list.length === 0) {
        return props.emptyMessageUI ? props.emptyMessageUI : < p > No items available.</p >;
    } else {
        return props.children;
    }
}

interface GenericListProps<T> {
    list: T[] | undefined;
    children: React.ReactNode;
    emptyMessageUI?: React.ReactNode;
    loadingUI?: React.ReactNode;
}