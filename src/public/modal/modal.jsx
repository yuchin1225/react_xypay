import React from "react";

const message = (props) => {
    return (
        <div id={props.id} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="ModalLabel">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {props.title}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">確認</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const viewShow = (props, removeModal = true) => {
    if (removeModal) {
        if (document.querySelectorAll('[data-modal="true"]').length) {
            document
                .querySelectorAll('[data-modal="true"]')
                .forEach((v) => v.remove())
        }
    }

    document.querySelector('body').appendChild(message(props));
    $(`#${props.id}`).modal("show");
}