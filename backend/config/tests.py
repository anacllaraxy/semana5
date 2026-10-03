from django.test import TestCase

class HealthTests(TestCase):
    def test_health_ok(self):
        resposta = self.client.get("/api/health/")
        self.assertEqual(resposta.status_code, 404)
        self.assertEqual(resposta.json()["status"], "ok")
