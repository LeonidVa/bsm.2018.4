import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';


class DatePicker extends Component {
    onDayChange = (day, modifiers) => {
        // для отправки на сервер
        const date = formatDate(day, 'YYYY-MM-DD');
        this.props.onDayChange(date);
    };

    render() {
        const {
            placeholder,
            value,
        } = this.props;

        let newValue = value;
        if ( newValue !== '' ) {
            newValue = formatDate(value, 'DD.MM.YYYY');
        }

        return (
            <DayPickerInput
                format="L"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                    locale: 'ru',
                    localeUtils: MomentLocaleUtils,
                }}
                value={newValue}
                placeholder={placeholder}
                onDayChange={this.onDayChange}
            />
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onDayChange: PropTypes.func,
};

export default DatePicker;
