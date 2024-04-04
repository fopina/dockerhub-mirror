module.exports = ({github, context}) => {
    console.log(context)
    return context.payload.name.value
}