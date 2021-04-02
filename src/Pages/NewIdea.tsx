import { m } from "framer-motion"

export function NewIdea() {
    const formContainer = {
        display: "flex",
        flexDirection: "column" as "column",
        width: "500px",
        justifyContent: "center" as "center",
        border: "1px solid black",
        textAlign: "left" as "left",
        margin: "0 auto"
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
        backgroundColor: "#6D6FAC"
    }

    const taskInputStyle = {}
    const purposeInputStyle = {}
    return (
        <div>
            <div style={newIdeaToolbar}>
                <div>New Idea</div>
                <div>
                    <button title="Save">Save</button>
                </div>
                <div>
                    <button title="Save">Save</button>
                </div>
            </div>
            <div style={formContainer}>
                <form>
                    <div style={formRow}>
                        <label style={formLabel}>As a </label>
                    </div>
                    <div style={formRow}>
                        <input style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="name" placeholder="Describe your target user" />
                    </div>
                    <div style={formRow}>
                        <label style={formLabel}>I want to </label>
                    </div>
                    <div style={formRow}>
                        <input style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="name" placeholder="Define target user action" />
                    </div>
                    <div style={formRow}>
                        <label style={formLabel}>so that I can </label>
                    </div>
                    <div style={formRow}>
                        <input style={{ ...ideaInputStyle, ...userInputColor }} type="text" name="name" placeholder="Describe target user purpose" />
                    </div>
                    <div style={formRow}>
                        <textarea style={{ ...ideaDescriptionStyle }} name="name" placeholder="Describe your idea in more detail" />
                    </div>
                </form>
            </div>
        </div>
    )
}