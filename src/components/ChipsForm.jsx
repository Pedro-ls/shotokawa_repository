import { useEffect } from "react"
/**
 * 
 * @param {arrayData: Array<string>} arrayData Prop react with name and id of the items in collection 
 * @returns JSX.Element
 */
function ChipsForm({ arrayData }) {
    const [testEditors, setTestEditors] = useState([])
    useEffect(() => {
        setTestEditors(
            arrayData
        )
    }, [])
    const ChipCustom = ({ content }) => {
        return (
            <Chip
                className="m-0.5"
                deleteButton
                onDelete={() => setTestEditors(testEditors.filter((value) => {
                    return value.id !== content.id
                }))}
            >
                {content.name}
            </Chip>
        )
    }
    return (
        <>
            <Block strongIos outlineIos>
                {
                    testEditors.map(({ id, name }, index) => {
                        return <ChipCustom key={index} content={{ id, name }} />
                    })
                }

            </Block>
        </>
    );
}

export default ChipsForm