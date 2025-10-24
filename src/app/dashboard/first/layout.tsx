import FirstPage from "./FirstPage";



export default function FirstPageLayout( {
  children,
}: {
  children: React.ReactNode;
})  {

    return <div className="flex flex-col">
        <FirstPage/>
        <div className="space-y-6">{children}</div>
    </div>

}