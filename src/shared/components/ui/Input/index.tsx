import Input from './variants/TextInput'
import Textarea from './variants/Textarea'


const InputFactory = Input as typeof Input & { Textarea: typeof Textarea }
InputFactory.Textarea = Textarea

export default InputFactory




/* import TextInput from './variants/TextInput'
import Textarea from './variants/Textarea'

export const Input = {
  input: TextInput,
  textarea: Textarea,
} as const

export type InputVariant = keyof typeof Input

export default Input */



/* import TextInput from './variants/TextInput';
import Textarea from './variants/Textarea';


const InputBase = TextInput;

const Input = Object.assign(InputBase, {
  textarea: Textarea,
});

export default Input; */