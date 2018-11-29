class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputValue = $("#valor");
    this._inputAmount = $("#quantidade");
    this._inputDate = $("#data");

    this._negotiations = new Negotiations(model => {
      this._view.update(model);
    });

    this._view = new NegotiationsView("#negotiations");

    this._view.update(this._negotiations);

    this._messageModel = new MessageModel();

    this._message = new MessageView("#mensagem");
    this._message.update(this._messageModel);
  }

  addNegotiation(event) {
    event.preventDefault();

    this._negotiations.adiciona(this._createNegotiation());

    this._cleanNegotiation();

    this._messageModel.text = "Operação realizada com sucesso";
    this._message.update(this._messageModel);
  }

  _createNegotiation() {
    return new Negotiation(
      DateConverter.toDate(this._inputDate.value),
      parseFloat(this._inputValue.value),
      parseInt(this._inputAmount.value)
    );
  }

  _cleanNegotiation() {
    this._inputValue.value = 0.0;
    this._inputAmount.value = 1;
    this._inputDate.value = "";
    this._inputDate.focus();
  }

  delete() {
    this._negotiations.empties();
    this._messageModel.text = "Negociações excluidas com sucesso!";
    this._message.update(this._messageModel);
  }
}
