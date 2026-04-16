// Function to load external HTML sections
async function loadSection(sectionName) {
    const contentArea = document.getElementById('content-area');
        try {
                const response = await fetch(`sections/${sectionName}.html`);
                        const html = await response.text();
                                contentArea.innerHTML = html;
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                            } catch (err) {
                                                    console.error("Error loading section:", err);
                                                        }
                                                        }

                                                        // Section Navigation Logic
                                                        function showSection(id, element) {
                                                            // Update active UI state
                                                                document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                                                                    if (element) element.classList.add('active');

                                                                        // Load the file
                                                                            loadSection(id);
                                                                            }

                                                                            // Initial Load
                                                                            window.onload = () => loadSection('home');

                                                                            // --- Data for Dynamic Output (Course/Staff Details) ---
                                                                            // Keep your staticCourses and staticStaff functions here as they were...