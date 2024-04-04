module.exports = ({github, context}) => {
    return context.payload.name.value
}