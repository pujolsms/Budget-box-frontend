import invoiceIcon from "../../assets/images/new-invoice.svg";
const AddTransactionBtn = (props) => {
	const { openAddReportModalHandler } = props;
	return (
		<div onClick={openAddReportModalHandler} className="add-budget">
			<img src={invoiceIcon} alt="" />
		</div>
	);
};

export default AddTransactionBtn;
