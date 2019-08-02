import React from 'react';
import ReactDOM from 'react-dom';

import { Calendar, CalendarCell, CalendarWeekCell, CalendarNavigationItem, CalendarHeaderTitle, DateInput, DatePicker, TimePicker, MultiViewCalendar, DateRangePicker, DateTimePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'

class App extends React.Component {
    render() {
        return(
            <div className="example-wrapper" >
                <h1>-----Date Time Picker-----</h1>

                <DateTimePicker />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

