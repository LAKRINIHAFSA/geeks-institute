class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # Method to make a call
    def call(self, other_phone):
        call_str = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_str)
        self.call_history.append(call_str)

    # Show call history
    def show_call_history(self):
        print("Call history for", self.phone_number)
        for c in self.call_history:
            print(c)

    # Send a message
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    # Show outgoing messages
    def show_outgoing_messages(self):
        print("Outgoing messages from", self.phone_number)
        for m in self.messages:
            print(m)

    # Show incoming messages
    def show_incoming_messages(self, all_phones):
        print("Incoming messages to", self.phone_number)
        for phone in all_phones:
            for m in phone.messages:
                if m["to"] == self.phone_number:
                    print(m)

    # Show messages from a specific phone number
    def show_messages_from(self, from_number):
        print(f"Messages to {self.phone_number} from {from_number}")
        for m in self.messages:
            if m["from"] == from_number:
                print(m)
