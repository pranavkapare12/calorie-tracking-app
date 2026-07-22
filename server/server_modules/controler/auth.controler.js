const loging = (req, res) => {
    res.status(200).json({
        'Messgae': "Loging is Working Correctly"
    })
}

const signup = (req, res) => {
    res.status(200).json({
        'Messgae': "Sign Up is Working Correctly"
    })
}

const logout = (req, res) => {
    res.status(200).json({
        'Messgae': "Logout is Working Correctly"
    })
}

export { loging, logout, signup }