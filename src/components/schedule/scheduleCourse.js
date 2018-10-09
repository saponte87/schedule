import React, { Component } from 'react';


class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <h1 className="schedule-course__title">{this.props.title}</h1>
       
            </div>
        )
    }
}

export default ScheduleCourse;