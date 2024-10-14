import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DialogModal = () => (
	<Dialog.Root > 
		<ToastContainer />
		<Dialog.Trigger className="mt-8" asChild>
			<button className="bg-blue-900 text-white py-2 px-6">Deposit Funds</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">Deposit</Dialog.Title>
				<Dialog.Description className="DialogDescription">
					Copy the address of the wallet you want to deposit funds
				</Dialog.Description>
				<fieldset className="Fieldset flex items-center bg-slate-200 px-3 w-full">
					{/* <label className="Label" htmlFor="name">
						Name
					</label> */}
					<input className="py-3 bg-transparent border-none active:border-none focus:outline-none text-sm  w-full" id="name" value="0x155e645C2169dF76E6739dea30aeF49F396D3a2C"  readOnly/>
					<FaCopy className="cursor-pointer" onClick={() => toast("Copied")} />
				</fieldset>
				{/* <fieldset className="Fieldset">
					<label className="Label" htmlFor="username">
						Username
					</label>
					<input className="Input" id="username" defaultValue="@peduarte" />
				</fieldset> */}
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					{/* <Dialog.Close asChild>
						<button className="Button green">Save changes</button>
					</Dialog.Close> */}
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default DialogModal;
