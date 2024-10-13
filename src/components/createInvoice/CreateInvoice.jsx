import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogModal = () => (
	<Dialog.Root > 
		<Dialog.Trigger className="mt-8" asChild>
			<button className="bg-blue-600 text-white py-2 px-6">Create Invoice</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">Create Invoice</Dialog.Title>
				<Dialog.Description className="DialogDescription">
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="name">
						Name
					</label>
					<input className="Input" id="name" defaultValue="Pedro Duarte" />
				</fieldset>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="username">
						Username
					</label>
					<input className="Input" id="username" defaultValue="@peduarte" />
				</fieldset>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className="Button green">Save changes</button>
					</Dialog.Close>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default DialogModal;
