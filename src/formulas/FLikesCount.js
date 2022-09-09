import store from "../bll/store";

const FLikesCount = ({idSearch}) => {
    let y = idSearch.data[0].id // - взять id у сравниваемого объекта
    let z = idSearch.likes.find(item => item.id === y) // - искать id в искомом объекте
    let a = 0
    if (z !== undefined) {
        a = z.count;
    }
    return (
        <div>
            Лайков: {a}
        </div>
    )
}

export default FLikesCount