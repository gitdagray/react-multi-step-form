import useFormContext from "../hooks/useFormContext"

const Billing = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="billFirstName">First Name</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billFirstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billLastName">Last Name</label>
                    <input
                        type="text"
                        id="billLastName"
                        name="billLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billLastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="billAddress1">Address</label>
            <input
                type="text"
                id="billAddress1"
                name="billAddress1"
                placeholder="555 Wallaby Way"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress2" className="offscreen">2nd Address line</label>
            <input
                type="text"
                id="billAddress2"
                name="billAddress2"
                placeholder="Apt. 2"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress2}
                onChange={handleChange}
            />

            <label htmlFor="billCity">City</label>
            <input
                type="text"
                id="billCity"
                name="billCity"
                placeholder="New York"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.billCity}
                onChange={handleChange}
            />

            <label htmlFor="billState">State</label>
            <select
                id="billState"
                name="billState"
                value={data.billState}
                onChange={handleChange}
            >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>

            <label htmlFor="billZipCode">Zip Code</label>
            <input
                type="text"
                id="billZipCode"
                name="billZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.billZipCode}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Billing