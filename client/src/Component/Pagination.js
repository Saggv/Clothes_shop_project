import React, {Component, Fragment} from "react";

class Pagination extends Component{
    render(){
        return(
            <Fragment>
                <ul className="pagination">
                    <li className="pagination__item"><a href="/home">&laquo;</a></li>
                    <li className="pagination__item"><a href="/home">1</a></li>
                    <li className="pagination__item"><a href="/home">2</a></li>
                    <li className="pagination__item"><a href="/home">3</a></li>
                    <li className="pagination__item"><a href="/home">4</a></li>
                    <li className="pagination__item"><a href="/home">&raquo;</a></li>
                </ul>
            </Fragment>
        )
    }
}

export default Pagination;