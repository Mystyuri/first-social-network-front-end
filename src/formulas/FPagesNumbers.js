import React from 'react';
import css from "./FPagesNumbers.module.css"

function FPagesNumbers({totalPages = 1, currentPage = 1, setCurrentPage, getCurrentAxiosPageAction}) {
    const totalPagesCeil = Math.ceil(totalPages)

    const pageNumbersFunction = () => {
        const x = []
        for (let i = currentPage - 3; i < currentPage + 3; i++) {
            x.push(i)
        }
        return x
    }


    // Альтернативная версия

    // const yyy = [currentPage-2,currentPage-1, currentPage, currentPage+1, currentPage+2]

    // const pageData = [
    //     (totalPagesCeil > 1) ? 1 : "",
    //         ...(totalPagesCeil >= 7) ? (
    //         [
    //             (currentPage > 3) ? "..." : "",
    //             ...yyy.filter(e => e >= 2).filter(e => e >= currentPage-1).filter(e => e <= currentPage+1).filter(e => e <= totalPagesCeil-1),
    //             (currentPage < totalPagesCeil - 3) ? "..." : ""
    //         ]
    //     ) : xxx.map(e => e),
    //     (totalPagesCeil > 1) ? totalPagesCeil : "",
    // ]

    const pageData = [
        ...pageNumbersFunction().filter(e => e > 0 && (currentPage === totalPagesCeil ? e >= currentPage - 2 : e >= currentPage - 1) && (currentPage === 1 ? e <= 3 : e <= currentPage + 1) && e <= totalPagesCeil)
    ]

    // return (
    //     <div className={css.numbers}>
    //         page:{pageData.filter(e => e !== "").map(e => <div className={e === currentPage && css.active} onClick={() => setCurrentPageAction(e)}>{e}</div>)}
    //     </div>
    // );
    return (
        <div className={css.numbers}>
            <div onClick={() => setCurrentPage(1) && getCurrentAxiosPageAction(1)} className={css.number}>«</div>
            <div onClick={() => setCurrentPage(currentPage - 1) && getCurrentAxiosPageAction(currentPage - 1)} className={css.number}>←</div>
            {pageData.map(e => <div className={e === currentPage ? css.active : css.number}
                                    onClick={() => (e !== currentPage) && setCurrentPage(e) && getCurrentAxiosPageAction(e)}>{e}</div>)}
            <div onClick={() => setCurrentPage(currentPage + 1) && getCurrentAxiosPageAction(currentPage + 1)} className={css.number}>→</div>
            <div onClick={() => setCurrentPage(totalPagesCeil) && getCurrentAxiosPageAction(totalPagesCeil)} className={css.number}>»</div>
        </div>
    );
}

export default FPagesNumbers;