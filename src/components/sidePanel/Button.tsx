/* eslint-disable @typescript-eslint/naming-convention */
import { EXTENSION_CONSTANT } from '../../constant';
function Button() {
    return (
        <button id={EXTENSION_CONSTANT.ELEMENT_IDS.TRIGGER_MESSAGE_BUTTON}>
            Generate Completion
        </button>
    );
}

export default Button;