from phone import Phone

# Create Phone objects
phone1 = Phone("+212612345678")
phone2 = Phone("+212698765432")
phone3 = Phone("+212600111222")

# Make calls
phone1.call(phone2)
phone2.call(phone1)

# Show call history
phone1.show_call_history()
phone2.show_call_history()

# Send messages
phone1.send_message(phone2, "Hi, how are you?")
phone2.send_message(phone1, "I'm fine, thanks!")
phone3.send_message(phone1, "Hello!")

# Show outgoing messages
phone1.show_outgoing_messages()

# Show incoming messages (requires all phone objects)
all_phones = [phone1, phone2, phone3]
phone1.show_incoming_messages(all_phones)

# Show messages from a specific number
phone1.show_messages_from("+212600111222")
