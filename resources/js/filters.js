export default {
    capitalize: (value) => {
        if ( ! value) return;

        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    },

    momentDate: (created_at) => {
        if ( ! created_at) return;

        return moment(created_at).format('MMMM Do YYYY');
    }

    // filterB: () => {},
}