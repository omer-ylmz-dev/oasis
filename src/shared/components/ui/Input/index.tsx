import Input from './variants/TextInput'
import Textarea from './variants/Textarea'


const InputFactory = Input as typeof Input & { Textarea: typeof Textarea }
InputFactory.Textarea = Textarea

export default InputFactory