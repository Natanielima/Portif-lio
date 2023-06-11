import { RichText as CMSRichText, RichTextProps} from '@graphcms/rich-text-react-renderer'

export default function RichText({...props}:RichTextProps) {
    return(
        <CMSRichText
        {...props}
        renderers={{
            bold:({children})=>(
                <b className='text-gray-50 font-medium'>{children}</b>
            )
        }}
        />
    )
}