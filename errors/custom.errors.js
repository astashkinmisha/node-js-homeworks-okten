module.exports = {
    NOT_VALID_USER: {
        message: 'Not valid file',
        code: 400
    },
    USER_CANT_BE_CHANGED: {
        message: 'You can change your email address or login only with administrator permission',
        code: 403
    },
    BAD_REQUEST_NOT_FOUND: {
        message: 'Wrong login or password',
        code: 404
    },
    NOT_FOUND_BY_ID: {
        message: 'Not found user with this ID',
        code: 404
    },
    USER_ALREADY_EXISTS: {
        message: 'User already exists!',
        code: 405
    }
};
