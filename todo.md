# Novara persistent data upgrade

- [ ] Upgrade the static project to the database-enabled full-stack scaffold.
- [ ] Review the full-stack conventions and available database helpers.
- [ ] Define the persistent schema for contact enquiries and any required metadata.
- [ ] Add a secure backend endpoint for validating and storing contact submissions.
- [ ] Update the contact form to submit to the persistent endpoint and handle success/errors.
- [ ] Run type checks and production build validation.
- [ ] Verify the database write path without inserting fabricated or test customer data.
- [ ] Save a checkpoint and deliver the database-enabled project.

## Scope note

Only the contact conversation flow is currently data-bearing in the public Novara website. No fabricated submissions, testimonials, customer reviews, ratings, or seed data will be added.

## Decisions to confirm later

- Whether Novara wants an authenticated internal enquiries dashboard in a later phase.
- Whether enquiry notification emails should be connected after persistence is verified.

- [ ] Finalize and communicate the database setup requirements and any remaining user actions.

## References

- Novara website playbook: `/home/ubuntu/upload/novara-playbook-v1.0-1.pdf`
- Existing design direction: `/home/ubuntu/novara-corporate/ideas.md`

## Source Notes

- The public prototype contact form currently displays a local success state and does not send data to a backend.
- The database upgrade should persist only user-submitted contact enquiries with server-side validation and conservative retention fields.

## Correction pass — official playbook alignment

- [x] Replace the invented ecosystem with exactly Novara, Lumora, Novara Academy, and Novara Labs.
- [x] Replace the invented five-stage SGOS line with the official eight-stage cyclical SGOS wheel.
- [x] Replace the capability grid with the ten official service ecosystem capabilities.
- [x] Update positioning to the exact official phrase: Novara — Strategic Growth Innovation Company.
- [x] Ground hero/about copy in the official Purpose Statement and Vision.
- [x] Add the five official Core Values to the About section.
- [x] Preserve the current visual identity, navigation, simplified How We Work section, initiatives, future timeline, contact modal, and footer structure.
- [x] Validate exactly four ecosystem cards and exactly eight cyclical SGOS stages.
- [x] Re-run type/build checks, responsive screenshots, and save the corrected checkpoint.

## GitHub export

- [ ] Create the private GitHub repository `novara-web-app`.
- [ ] Commit and push the current Novara project files.
- [ ] Verify the remote repository and default branch.
- [ ] Deliver the private repository link.
