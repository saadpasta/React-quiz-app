import React, { Component } from 'react'

export default class Dashborad extends Component {

    constructor(props) {
        super()
    }

    render() {
        const { list , onPress } = this.props
        return (
            <div>

                <h1>Quiz List</h1>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Quiz Name</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <br></br>
                    <tbody>
                        {list.map((quiz, index) => {
                            return <tr>
                                <th scope="row">{index}</th>

                                <td>
                                    {quiz.name}
                                </td>
                                <td>
                                    <button className="btn btn-info"  onClick={() => onPress(index)}>Enter The Quiz</button>
                                </td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>




            </div>
        )
    }
}
