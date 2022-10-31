const workOrderFormHandler = async (event) => {
    event.preventDefault();

    const data = {
        priority: document.querySelector('#priority-input').value.trim(),
        category: document.querySelector('#category-input').value.trim(),
        description: document.querySelector('#description-input').value.trim(),
        // image: document.querySelector('#image-input').value.trim(),
        // user_id: document.querySelector('#user-id-input').value.trim(),
        user_id: 2
    };

    console.log(data)
    const response = await fetch('/api/WorkOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        // document.location.replace('/');
        window.location.reload();
    } else {
        console.log("Sorry, could not create new work order request");
    };
};

// Submit new work order
document
    .querySelector('#work-order-form')
    .addEventListener('submit', workOrderFormHandler);

// Update each render of work order modal form
$("#table-container").on("click", "#work-order-row", async function () {
    let workOrderId = $(this).data().id;
    $("#word-order-update-id-display").text(workOrderId);

    Object.entries($(this).data()).forEach(workOrder => {
        if (workOrder[0] !== 'description') {
            $(`#${workOrder[0]}-update`).val(workOrder[1]);
        } else {
            let desc = $(`#${workOrderId}-description`).text();
            $(`#${workOrder[0]}-update`).val(desc);
        }
    });
});

// Run update work order api
$("#update-work-order-form").on("submit", async function (e) {
    e.preventDefault();

    const data = {
        id: document.querySelector('#id-update').value.trim(),
        priority: document.querySelector('#priority-update').value.trim(),
        category: document.querySelector('#category-update').value.trim(),
        description: document.querySelector('#description-update').value.trim(),
    };

    const res = await fetch('/api/WorkOrder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        console.log("Successfully updated work order request");
        window.location.reload();
    } else {
        console.log("Sorry, could not update work order request");
    };
});

// Delete work order listener
$("#table-container").on("click", "#delete-work-order-btn", async function () {
    const { id } = $(this).data();

    let confirm = window.confirm("Are you sure you want to cancel your work order?")

    if (confirm) {
        const res = await fetch(`/api/WorkOrder/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            console.log("Successfully canceled work order request");
            window.location.reload();
        } else {
            console.log("Sorry, could not cancel work order request at this time");
        };
    }
    return;
});