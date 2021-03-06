import {Colors, Controls, FlumeConfig} from 'flume'

const config = new FlumeConfig()

config
    .addPortType({
        type: "string",
        name: "string",
        label: "Text",
        color: Colors.green,
        controls: [
            Controls.text({
                name: "string",
                label: "Text"
            })
        ]
    })
    .addNodeType({
        type: "string",
        label: "Text",
        description: "Outputs a string of text",
        inputs: ports => [
            ports.string()
        ],
        outputs: ports => [
            ports.string()
        ]
    })
export default config;