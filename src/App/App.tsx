const App = () => {
  const [isDialogShow, setIsDialogShow] = useState<undefined | true>()
  return (
    <>
      <div _pos="fixed top-100px right-20px">
        <wired-icon-button
          onClick={() => setIsDialogShow(!isDialogShow || undefined)}>
          {' '}
          拼！
        </wired-icon-button>
      </div>

      <wired-dialog _h="500px" open={isDialogShow}>
        <div _w="500px">
          <wired-button onClick={() => setIsDialogShow(undefined)}>
            关闭
          </wired-button>
        </div>
      </wired-dialog>
    </>
    // <wired-card _pos="fixed top-100px right-0">
    //   <div>计数：{count}</div>

    //   <wired-button onClick={() => setCount(count + 1)}>自增</wired-button>

    //   <wired-button id="openDialog">Close dialog</wired-button>
    //   <wired-dialog>
    //     <p>Dialog content here</p>
    //     <div>
    //       <wired-button id="closeDialog">Close dialog</wired-button>
    //     </div>
    //   </wired-dialog>
    // </wired-card>
  )
}

export default App
