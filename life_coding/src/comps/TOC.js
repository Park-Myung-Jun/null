import React, { Component } from 'react';

class TOC extends Component {
    render() {
        console.log("TOC rendor")
        var list = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            list.push(<li key={data[i].id}>
                <a href={"/content/" + data[i].id}
                    data-id={data[i].id} //data-id에서 dataset의 id를 통해 접근 가능
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                    {data[i].title}
                </a>-or-
                <a href={"/content/" + data[i].id}
                    data-id={data[i].id} //data-id에서 dataset의 id를 통해 접근 가능
                    onClick={function (id, e) {
                        e.preventDefault();
                        this.props.onChangePage(id);
                    }.bind(this, data[i].id)}>
                    {data[i].title}
                </a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}

export default TOC;