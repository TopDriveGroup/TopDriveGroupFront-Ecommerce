/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */

export const StylesReactSelect = {
    control: (provided: any, state: any) => ({
        ...provided,
        // width: 400,
        backgroundColor: 'white',
        borderColor: state.isFocused ? '#e4002b' : 'rgba(0, 0, 0, 0.2)',
        boxShadow: state.isFocused ? '0 0 0 1px #e4002b' : null,
        '&:hover': {
            borderColor: state.isFocused ? '#e4002b' : 'rgba(0, 0, 0, 0.2)'
        },
        padding: '5px',
        borderRadius: '5px'
    }),
};

export const StylesReactSelectItems = {
    control: (provided: any, state: any) => ({
        ...provided,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderColor: state.isFocused ? '#e4002b' : 'rgba(0, 0, 0, 0.2)',
        boxShadow: state.isFocused ? '0 0 0 1px #e4002b' : null,
        '&:hover': {
            borderColor: state.isFocused ? '#e4002b' : 'rgba(0, 0, 0, 0.2)'
        },
        padding: '5px',
    }),
};