export default function GombaUrlap(props) {

function submitGomb(event){
    console.log("valami")
    event.preventDefault()
    props.submitGomb("helló")
}

    return (
        <form>
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">
                   Név
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                />
            </div>

            <button type="submit" class="btn btn-success" onClick={submitGomb}>
                Submit
            </button>
        </form>
    );
}
