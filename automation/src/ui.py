
import automation

class ui:

  def __init__(self, automation):
    self.automation = automation

  def run(self):
    # input value
    val = ''

    # acceptable exit values
    exit_values = ['q', 'quit', 'e', 'exit']

    while val not in exit_values and self.automation.running:
      val = input().lower()

    self.automation.running = False

