import Button from "../../components/ui_form/Button.jsx";

export default function HomeCards({imgSrc, title, subtitle, btnText, children, action}){
    return(
        <div className={'lg:w-[33%] h-full bg-primary p-2 pb-6'}>
            <div className={'flex gap-2 items-center'}>
                <img className={'w-24'} src={imgSrc} alt={title}/>
                <h2 className={'font-bold text-2xl border-l-2 pl-4 border-primary_dark'}>{title}</h2>
            </div>
            <Button
                text={btnText}
                addClass={'w-full'}
                action={action}
            />
            <p className={'text-center mt-4 border-t-2 pt-2 border-primary_dark italic'}>{subtitle}</p>
            <div>
                {children}
            </div>
        </div>
    )
}