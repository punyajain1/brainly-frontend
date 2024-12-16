export function Input( {refrence , placeholder}: {placeholder: string ; refrence: any}){
    return (
        <div>
            <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" ref={refrence} />
        </div>
    )
}