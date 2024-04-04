module.exports = ({github, context, core}) => {
    return `ehlo ${github.event.inputs.name}`
}
