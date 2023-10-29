import MaxWidth from "../layout/MaxWidth"
import Iframe from "react-iframe"

const ModalFH = ({ show, onClose, children, title }) => (
  <S.Clearance>
    <S.Iframe
      clasName="tally-form"
      url="https://tally.so/r/npyOrq"
      width="100%"
      height="100vh"
      frameBorder="1"
      marginHeight="0"
      marginWidth="0"
      title="nanoHome Promotion"
      style="background: transparent; border: 1px solid #ccc;"
      display="block"
      position="relative"
    ></S.Iframe>
  </S.Clearance>
)

const S = {}

S.Clearance = tw(MaxWidth)``
S.Iframe = tw(Iframe)`h-screen m-auto`

export default ModalFH
