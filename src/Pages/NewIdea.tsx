import { useState } from "react"

export function NewIdea(props: { formSubmissionHook: (arg0: { content: { user: string; wants: string; purpose: string; author: string; description: string } }) => void }) {
    //Styling for UI
    const compContainer = {
        display: "flex",
        width: "100%",
        maxWidth: "500px",
        flexDirection: "column" as "column",
        margin: "0 auto",
        border: "2px solid black",
    }
    const formContainer = {
        display: "flex",
        flexDirection: "column" as "column",
        width: "100%",
        justifyContent: "center" as "center",
        textAlign: "left" as "left",
    }
    const ideaInputStyle = {
        background: "none",
        border: "none",
        width: "100%",
        height: "50px",
        fontSize: "24px"
    }
    const ideaDescriptionStyle = {
        background: "white",
        border: "none",
        height: "150px",
        width: "100%",
        fontSize: "16px"
    }
    const userInputColor = {
        color: "yellow"
    }
    const formLabel = {
        fontSize: "24px",
        color: "black",
    }
    const formRow = {
        marginTop: 32,
        marginBottom: 32,
        marginLeft: 32,
        marginRight: 32
    }
    const newIdeaToolbar = {
        display: "flex",
        flexDirection: "row" as "row",
        height: 60,
        backgroundColor: "#6D6FAC",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "32px",
        paddingRight: "32px"
    }
    const submitButton = {
        fontSize: 16,
        backgroundColor: "yellow",
        padding: "8px"
    }
    //Component states
    const [ideaUser, setIdeaUser] = useState("")
    const [ideaWants, setIdeaWants] = useState("")
    const [ideaPurpose, setIdeaPurpose] = useState("")
    const [ideaAuthor, setIdeaAuthor] = useState("")
    const [ideaDescription, setIdeaDescription] = useState("")
    const [formReady, setFormReady] = useState(false)

    function formSubmit() {
        let ideaFormData = {
            content: {
                user: ideaUser,
                wants: ideaWants,
                purpose: ideaPurpose,
                author: ideaAuthor,
                description: ideaDescription
            }
        }
        props.formSubmissionHook(ideaFormData)
        setIdeaUser("")
        setIdeaAuthor("")
        setIdeaPurpose("")
        setIdeaDescription("")
        setIdeaWants("")
    }

    return (
        <div style={compContainer}>
            <div style={newIdeaToolbar}>
                <div>
                    <input style={{ padding: "8px" }} type="text" name="author" onChange={e => setIdeaAuthor(e.target.value)} value={ideaAuthor} placeholder="Idea mastermind name" />
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <input style={submitButton} onClick={formSubmit} type="submit" name="Submit Idea" />
                </div>
            </div>
            <div style={formContainer}>
                <form>
                    <div style={formRow}>
                        <label style={formLabel}>As a </label>
                    </div>
                    <div style={formRow}>
                        <input required={true} style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="user" onChange={e => setIdeaUser(e.target.value)} value={ideaUser} placeholder="Describe your target user" />
                    </div>
                    <div style={formRow}>
                        <label style={formLabel}>I want to </label>
                    </div>
                    <div style={formRow}>
                        <input style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="wants" onChange={e => setIdeaWants(e.target.value)} value={ideaWants} placeholder="Define target user action" />
                    </div>
                    <div style={formRow}>
                        <label style={formLabel}>so that I can </label>
                    </div>
                    <div style={formRow}>
                        <input style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="purpose" onChange={e => { setIdeaPurpose(e.target.value) }} value={ideaPurpose} placeholder="Describe target user purpose" />
                    </div>
                    <div style={formRow}>
                        <textarea style={{ ...ideaDescriptionStyle }} name="description" onChange={e => { setIdeaDescription(e.target.value) }} value={ideaDescription} placeholder="Describe your idea in more detail" />
                    </div>
                </form>
            </div>
        </div>
    )
}