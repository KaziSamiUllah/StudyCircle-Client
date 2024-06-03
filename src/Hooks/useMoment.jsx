import moment from 'moment';

const useMoment = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    return currentDate;
}
export default useMoment;